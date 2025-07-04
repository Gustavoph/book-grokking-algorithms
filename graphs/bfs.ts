function findShortestPath(
  edges: [string, string][],
  start: string,
  end: string
) {
  const graph = new Map<string, string[]>();

  for (const [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);

    graph.get(a)!.push(b);
    graph.get(b)!.push(a);
  }

  const queue: string[][] = [[start]];
  const visited = new Set<string>();
  visited.add(start);

  while (queue.length > 0) {
    const path = queue.shift(); // remove first item
    const node = path[path.length - 1]; // get first item

    if (node === end) {
      return path; /* BASE CASE*/
    }

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }

  return [];
}

const edges: [string, string][] = [
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'D'],
  ['C', 'E'],
  ['D', 'F'],
  ['E', 'F'],
];

const start = 'A';
const end = 'F';

const path = findShortestPath(edges, 'A', 'F');
console.log('BEST PATH: ', path);
