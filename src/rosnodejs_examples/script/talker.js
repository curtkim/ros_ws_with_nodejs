#!/usr/bin/env node

'use strict';

// Require rosnodejs itself
const rosnodejs = require('rosnodejs');
// Requires the std_msgs message package
const std_msgs = rosnodejs.require('std_msgs').msg;
const num_msgs = rosnodejs.require('beginner_tutorials').msg;

function talker() {
  // Register node with ROS master
  rosnodejs.initNode('/talker_node')
    .then((rosNode) => {
      // Create ROS publisher on the 'chatter' topic with String message
      let pub = rosNode.advertise('/chatter', std_msgs.String);
      let count = 0;
      const msg = new std_msgs.String();
      // Define a function to execute every 100ms
      setInterval(() => {
        // Construct the message
        msg.data = 'hello world ' + count;
        // Publish over ROS
        pub.publish(msg);
        // Log through stdout and /rosout
        rosnodejs.log.info('I said: [' + msg.data + ']');
        ++count;
      }, 100);

      
      let num_pub = rosNode.advertise('/chatter_num', num_msgs.Num);
      const msg2 = new num_msgs.Num();
      setInterval(() => {
        msg.num = count;
        num_pub.publish(msg);
        ++count;
      }, 100);

    });
}

if (require.main === module) {
  // Invoke Main Talker Function
  talker();
}