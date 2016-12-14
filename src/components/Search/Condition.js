import React, {Component} from 'react';
import ConditionFilter from './ConditionFilter';
// import ConditionTagList from './ConditionTagList';

class Condition extends Component {
  render () {
    return (
      <div>
        <div>
          <p><em>'{this.props.queryParams.keyword}'</em>맛집 리스트</p>
          <ConditionFilter
            queryParams={this.props.queryParams}
            onChangeOrdering={this.props.onChangeOrdering}
          />
        </div>
        <div>
          {/*<ConditionTagList />*/}
        </div>
      </div>
    );
  }
}

export default Condition;