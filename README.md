## Configuring Your ROS Environment

    catkin_make
    source devel/setup.bash
    echo $ROS_PACKAGE_PATH

## Creating a ROS Package

    cd catkin_ws/src
    catkin_create_pkg beginner_tutorials std_msgs rospy roscpp

## Understanding ROS Nodes

    sudo apt-get install ros-merodic-ros-tutorials
    roscore
    rosnode list
    rosnode info /rosout
    rosrun turtlesim turtlesim_node

## Creating a ROS msg and srv

    # http://wiki.ros.org/ROS/Tutorials/CreatingMsgAndSrv
    rosmsg show beginner_tutorials/Num
    rosmsg show Num

## Examining the Simple Publisher and Subscriber

    rosrun beginner_tutorials talker 
    rosrun beginner_tutorials listener
    

