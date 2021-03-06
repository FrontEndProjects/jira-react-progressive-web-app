import React, { Component } from 'react';
import TaskHeader from '../components/taskHeader/TaskHeader';
import Task from '../components/task/Task';
import Bar from '../components/bar/Bar';

import dateFormat from 'dateformat';

export default class ContentContainer extends Component {

  render () {
    let issues = this.props.issues;
    let issuesNumber = issues.length;
    let Cards = issues.map((elem, idx) => {
      return <Task
        title={elem.fields.summary}
        avatar={elem.fields.reporter.avatarUrls['32x32']}
        link={elem.key}
        reporter={elem.fields.reporter.displayName}
        reporterEmail={elem.fields.reporter.emailAddress}
        created={dateFormat(elem.fields.created, 'dddd, dS mmmm yyyy, h:MM:ss')}
        updated={dateFormat(elem.fields.uptaded, 'dddd, dS mmmm yyyy, h:MM:ss')}
        project={elem.fields.project.name}
        key={idx}
       />;
    });

    return (
        <div>
          <Bar user={this.props.username} />
          <TaskHeader issuesNumber={issuesNumber} />
          {Cards}
        </div>
     );
  }
}
