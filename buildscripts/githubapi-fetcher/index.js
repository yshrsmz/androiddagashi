/* eslint no-console:0 */
const config = require('./config');
const fs = require('fs');
const { createApolloFetch } = require('apollo-fetch');


// query for index
const indexQuery = fs.readFileSync('./apollo/queries/getMilestoneDigests.gql', 'utf8');
// query for issue
const milestoneQuery = fs.readFileSync('./apollo/queries/getMilestoneByNumber.gql', 'utf8');

// setup apollo
const apolloFectch = createApolloFetch({ uri: config.api });
apolloFectch.use(({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {};
  }
  options.headers['authorization'] = `Bearer ${config.token}`;

  next();
});

/**
 * generate json for issue
 * @param {number} milestoneNumber milestone number to fetch
 * @returns {Void} Void
 */
async function generateIssueJson(milestoneNumber) {
  var { data, errors }  = await apolloFectch(
    {
      query: milestoneQuery,
      variables: {
        repoOwner: config.repoOwner,
        repoName: config.repoName,
        milestoneNumber: milestoneNumber,
        fetchIssuesPerMilestone: 50,
        fetchCommentsPerIssue: 10
      },
      operationName: 'getMilestoneByNumber'
    }
  );

  if (errors) {
    console.error(errors);
  } else {
    let milestone = data.repository.milestone;
    if (milestone.issues.pageInfo.hasNextPage) {
      // TODO: fetch issues & comments recursively
    }
    fs.writeFileSync(
      `./static/api/issue/${milestone.title}.json`,
      JSON.stringify(milestone, null, '  '),
      'utf8'
    );
  }
}

/**
 * generate json file for index
 * @returns {object} repository
 */
async function generateIndexJson() {
  var { data, errors } = await apolloFectch(
    {
      query: indexQuery,
      variables: {
        repoOwner: config.repoOwner,
        repoName: config.repoName
      },
      operationName: 'getMilestoneDigests'
    }
  );

  if (errors) {
    console.log('Failed to generate index.json', errors);
    return null;
  } else {
    let repository = data.repository;
    if (repository.milestones.pageInfo.hasNextPage) {
      // TODO: fetch milestones recursively
    }
    fs.writeFileSync(
      './static/api/index.json',
      JSON.stringify(repository, null, '  '),
      'utf8'
    );
    return repository;
  }
}

/**
 * entry method.
 * generate all required json files.
 * @returns {Void} Void
 */
async function generateJsons() {
  try {
    // generate json for home
    var { milestones } = await generateIndexJson();

    // generate json for each issue
    for (var i = 0; i < milestones.nodes.length; i++){
      console.log('fetching milestone:', milestones.nodes[i].number);
      var milestone = await generateIssueJson(milestones.nodes[i].number);
    }

  } catch (e) {
    console.error('Failed to generate json', e);
  }
}


generateJsons();

