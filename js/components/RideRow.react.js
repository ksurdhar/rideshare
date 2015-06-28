/** @jsx React.DOM */

var React = require('react');

module.exports = RideRow = React.createClass({
  _deleteRide: function(){
    this.props.deleteRideHandler(this.props.ride.id);
  },

  _createRequest: function(){
    var request = {
      userId: this.props.currentUser.id,
      rideId: this.props.ride.id
    };
    this.props.createRequestHandler(request);
  },

  _formatTime: function(time){
    var formattedTime = new Date(time);
    formattedTime = formattedTime.toLocaleTimeString();
    return formattedTime.replace(':00', '');
  },

  render: function(){
    return(
      <tr>
        <td>
          <h4>
            <a href="fakeurl">{ this.props.ride.destination }</a>
          </h4>
        </td>

        <td>
          <h4>
            { this._formatTime(this.props.ride.leavingAt) }
          </h4>
        </td>

        <td>
          <h4>
            { this.props.ride.user.username }
          </h4>
        </td>

        <td>
          <h4>
            { this.props.ride.spacesAvailable }
          </h4>
        </td>

        <td>
          <h4>
          <span className="glyphicon glyphicon-plus" onClick={ this._createRequest }></span>
          </h4>
        </td>

        <td>
          <h4>
            <span className="glyphicon glyphicon-remove" onClick={ this._deleteRide }></span>
          </h4>
        </td>
      </tr>
    );
  }
});
