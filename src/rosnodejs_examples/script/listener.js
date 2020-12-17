#!/usr/bin/env node

'use strict';

// Require rosnodejs itself
const rosnodejs = require('rosnodejs');

const std_msgs = rosnodejs.require('std_msgs').msg;
const num_msgs = rosnodejs.require('beginner_tutorials').msg;

function listener() {
  // Register node with ROS master
  rosnodejs.initNode('/listener_node')
    .then((rosNode) => {
      // Create ROS subscriber on the 'chatter' topic expecting String messages
      let sub = rosNode.subscribe('/chatter', std_msgs.String,
        (data) => { // define callback execution
          rosnodejs.log.info('I heard: [' + data.data + ']');
        }
      );

      let sub2 = rosNode.subscribe('/chatter_num', num_msgs.Num,
        (data) => { // define callback execution
          rosnodejs.log.info('I heard from /chatter_num : [' + data.num + ']');
        }
      );
    });
}

if (require.main === module) {
  listener();
}