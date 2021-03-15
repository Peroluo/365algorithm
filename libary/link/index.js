/*
 * @Author: pero
 * @Date: 2021-03-09 16:30:49
 * @LastEditTime: 2021-03-09 17:15:45
 * @Description: Links工具方法
 */

/**
 * @description: 链表节点
 * @param {any} 链表的值
 * @param {ListNode} 下一个节点
 * @author: pero
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @description:数组转链表
 * @param {Array} arr 数组
 * @return {ListNode} 链表
 * @author: pero
 */
const createLink = (arr = []) => {
    let header = null;
    arr.reverse().forEach(element => {
        current = new ListNode(element);
        current.next = header;
        header = current;
    });
    return header;
};
/**
 * @description: 链表转数组
 * @param {ListNode} 链表
 * @return {Array} 数组
 * @author: pero
 */
const parseLink = head => {
    const list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    return list;
};

module.exports = { ListNode, parseLink, createLink };
