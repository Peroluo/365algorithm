/*
 * @Author: pero
 * @Date: 2021-03-09 16:33:14
 * @LastEditTime: 2021-03-09 17:31:17
 * @Description: 链表测试入口
 */

const { ListNode, createLink, parseLink } = require('./index');

// 链表反转
const reverseLink = head => {
    let newHead = null;
    let current;
    while (head) {
        current = head;
        head = head.next;
        current.next = newHead;
        newHead = current;
    }
    return newHead;
};

var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow);
};

const link = createLink([1, 2, 3, 4]);

isPalindrome(link);
