'use strict';

let LinkedList = require('../lib/linkedlist.js');
let expect = require('expect');

describe('testing LinkedList methods', () => {
  describe('testing appendNode', () => {
    it('should append 20', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      expect(test.next.value).toEqual(20);
    });
    it('should append 30', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(30));
      expect(test.next.value).toEqual(30);
    });
    it('should append 40', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(40));
      expect(test.next.value).toEqual(40);
    });
  });

  describe('testing removeNode', () => {
    it('should remove 40', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(40));
      test.removeNode(40);
      expect(test.next).toEqual(null);
    });
    it('should remove 30', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(40));
      test.removeNode(30);
      expect(test.next.value).toEqual(40);
    });
    it('should remove 20', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      test.removeNode(20);
      expect(test.next).toEqual(null);
    });
  });

  describe('testing reverseNodes', () => {
    it('should reverseNodes', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(40));
      let reversedLL = test.reverseNodes();
      expect(reversedLL.value).toEqual(40);
    });
    it('should reverseNodes', () => {
      let test = new LinkedList(40);
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(20));
      test.appendNode(new LinkedList(10));
      let reversedLL = test.reverseNodes();
      expect(reversedLL.value).toEqual(10);
    });
    it('should reverseNodes', () => {
      let test = new LinkedList(100);
      test.appendNode(new LinkedList(200));
      test.appendNode(new LinkedList(300));
      test.appendNode(new LinkedList(400));
      let reversedLL = test.reverseNodes();
      expect(reversedLL.value).toEqual(400);
    });
  });

  describe('testing findMiddle', () => {
    it('should find middle value: 20', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(40));
      expect(test.findMiddle().value).toEqual(20);
    });
    it('should find middle value: 200', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(200));
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(40));
      expect(test.findMiddle().value).toEqual(200);
    });
    it('should find middle value: 2000', () => {
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(2000));
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(40));
      expect(test.findMiddle().value).toEqual(2000);
    });
  });
});
