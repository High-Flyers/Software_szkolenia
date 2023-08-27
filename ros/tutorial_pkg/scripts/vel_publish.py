#!/usr/bin/env python

import rospy
from geometry_msgs.msg import Twist
import random

class VelocityPublisherNode:
    def __init__(self):
        rospy.init_node('velocity_publisher', anonymous=True)
        self.pub = rospy.Publisher('/turtle1/cmd_vel', Twist, queue_size=10)
        self.rate = rospy.Rate(1)  # 1 Hz

    def publish_velocity(self):
        while not rospy.is_shutdown():
            vel_msg = Twist()
            vel_msg.linear.x = random.uniform(0.0, 2.0)
            vel_msg.angular.z = random.uniform(-3.14, 3.14)
            rospy.loginfo("Publishing: Linear=%.2f, Angular=%.2f", vel_msg.linear.x, vel_msg.angular.z)
            self.pub.publish(vel_msg)
            self.rate.sleep()

if __name__ == '__main__':
    try:
        node = VelocityPublisherNode()
        node.publish_velocity()
    except rospy.ROSInterruptException:
        pass
