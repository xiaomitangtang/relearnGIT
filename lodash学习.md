Array
  _.chunk([1,2,3],2)         ======>[1,2][3]    分割数组
  _.compact([0,1,false])     ======> [1]         移出假值的新数组
  _.concat([1],2,[3],[[4]])   ======>[1,2,3,[4]]  合并成一个数组
  _.difference([3,2,1],[4,2]) ======>[3,1]        返回差异的部分
  _differenceBy([3.1,2.2,1.3],[4.4,2.5],Math.floor)   ====>[3.1,1.3]   返回一定函数处理之后的差异数组
  _.differenceWith（[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],[{ 'x': 1, 'y': 2 }], _.isEqual）=====>[{ 'x': 2, 'y': 1 }]
 _.drop([1, 2, 3], 2)       ======> [3]     裁剪数组中的前 N 个数组，返回剩余的部分。
 _.dropRight(array, [n=1])
_.dropRightWhile(array, [predicate=_.identity])
_.dropWhile(array, [predicate=_.identity])
_.fill(array, value, [start=0], [end=array.length])   指定 值 填充数组，从 start 到 end 的位置，但不包括 end 本身的位置。
_.findIndex(array, [predicate=_.identity])  这个方法类似 _.find。除了它返回最先通过 predicate 判断为真值的元素的 index ，而不是元素本身。
               _.findIndex(users, function(o) { return o.user == 'barney'; });
               // => 0
_.flatten(array)     向上一级展平数组嵌套
_.flattenDeep(array)  递归展平 数组.   _.flattenDeep([1, [2, [3, [4]], 5]]);    // => [1, 2, 3, 4, 5]
_.flattenDepth(array, [depth=1])
_.fromPairs(pairs)  这个方法返回一个由键值对构成的对象。  _.fromPairs([['fred', 30], ['barney', 40]]);     // => { 'fred': 30, 'barney': 40 }
_.head(array)     获得数组的首个元素
_.indexOf(array, value, [fromIndex=0])   根据 value 使用 SameValueZero 等值比较返回数组中首次匹配的 index， 如果 fromIndex 为负值，将从数组尾端索引进行匹配，如果将 fromIndex 设置为 true，将使用更快的二进制检索机制。
_.initial()    获取数组中除了最后一个元素之外的所有元素
_.intersection([arrays])    返回数组中所有数组共享元素的新数组
_.intersectionBy([arrays], [iteratee=_.identity])
_.intersectionWith([arrays], [comparator])
_.join(array, [separator=','])     _.join(['a', 'b', 'c'], '~');    // => 'a~b~c'
_.last(array)   获取数组中的最后一个元素
_.lastIndexOf(array, value, [fromIndex=array.length-1])   // 使用了 `fromIndex`
                                                          _.lastIndexOf([1, 2, 1, 2], 2, 2);
                                                          // => 1
_.prototype.reverse()    反转数组，第一个元素移动到最后一位，第二个元素移动到倒数第二，类似这样
_.pull(array, [values])   移除所有经过 SameValueZero 等值比较为 true 的元素
_.pullAll(array, values)
_.remove(array, [predicate=_.identity])   移除经过 predicate 处理为真值的元素，并返回被移除的元素。predicate 会传入3个参数：(value, index, array)
_.slice(array, [start=0], [end=array.length])

_.cloneDeep(value)
_.eq(value, other)------通过===进行比较
_.clamp(number, [min], max)














