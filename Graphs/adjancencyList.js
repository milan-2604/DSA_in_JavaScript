class Graph{
    constructor(){
        this.adjacency ={};
    }
    addVertex(vertex){
        if(!this.adjacency[vertex]){
            this.adjacency[vertex]=[];
        }
    }
    addEdge(vertex1,vertex2){
        if(this.adjacency[vertex1] && this.adjacency[vertex2]){
            this.adjacency[vertex1].push(vertex2);
            this.adjacency[vertex2].push(vertex1);
            return true;
        }else{
            return false;
        }
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacency[vertex1]&&this.adjacency[vertex2]){
            this.adjacency[vertex1]=this.adjacency[vertex1].filter(char=> char!==vertex2);
            this.adjacency[vertex2]=this.adjacency[vertex2].filter(char=>char!==vertex1);
        }
    }
    removeVertex(vertex){
        if(this.adjacency[vertex]){
            while(this.adjacency[vertex].length){
                const current = this.adjacency[vertex].pop();
                this.removeEdge(vertex,current);
            }
            delete this.adjacency[vertex];
        }
    }
}
const newGraph = new Graph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addEdge("A","B");
newGraph.addEdge("A","D");
newGraph.addEdge("B","C");
newGraph.addEdge("C","D");
newGraph.removeEdge("A","D");
newGraph.removeVertex("A");
console.log(newGraph);