import React, {Component} from 'react';
import ConditionFilter from './ConditionFilter';
import ConditionTagList from './ConditionTagList';

class Condition extends Component {
  render () {
    return (
      <div>
        <div>
          <p><em>'소고기'</em>맛집 리스트</p>
          <ConditionFilter />
        </div>
        <div>
          <ConditionTagList />
        </div>
      </div>
    );
  }
}

export default Condition;