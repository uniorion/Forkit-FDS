import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Common/Header';
import PhotoCarousel from '../components/PhotoCarousel/PhotoCarousel';
import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
import * as RestaurantActions from '../actions/restaurant';

//Header, 지도, 페이징 컴포넌트와 검색/정렬 필터, 목록으로 구성됨

class Restaurant extends Component
{
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  //처음 열렸을 때 1회 실행
  componentDidMount(){
    const { dispatch } = this.props;
    this.loadRestaurant();
  }

  //컴포넌트가 prop을 받을때 실행(params 변경시)
  componentWillReceiveProps(nextProps){
    if(nextProps.params.id !== this.props.params.id){
      this.loadRestaurant();
    }
  }

  loadRestaurant(){
    const { actions } = this.props;
    actions.fetchRestaurantIfNeeded(this.props.params.id);
  }

  render(){
    return (
      <div>
        <Header/>
        {
          this.props.restaurant.id &&
          <main>
            <h2>Restaurant Detail {this.props.params.id}</h2>
            <div>{this.props.restaurant.address}</div>
            <PhotoCarousel images={this.props.restaurant.images} />
            <RestaurantInfo restaurant={this.props.restaurant} />  
          </main>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.restaurant.isFetching,
  restaurant: state.restaurant.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchRestaurantIfNeeded: RestaurantActions.fetchRestaurantIfNeeded
  }, dispatch)
});

// export default Restaurant;
export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);