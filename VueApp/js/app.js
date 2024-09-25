const app = Vue.createApp(
{
    data: function() {
        return {
            newAssign: {
                name: '',
                description: '',
                priority: "1",
                dueDate: new Date(Date.now()),
                steps: [['',false], ['',false]], //first value is step text, second is whether it's marked as done

            },
            assignList: [
                {name: 'Vue App', description: 'Create a web application using Vue.', priority: "2", dueDate: new Date("2024-09-11"), steps:[
                    ["Create page layout/interface", true],
                        ["Add placeholder content", false],
                        ["Add Vue functionality", false]
                    ]},
                {name: 'Other Assignment', description: "This isn't a real assignment, but it looks like one.", priority: "3", dueDate: new Date("2024-09-18"), steps:[
                        ["Do something", true],
                        ["Do another thing", false]
                    ]}
            ],

        }
    },
    methods: {
        remove: function(item) {
            //console.log(this.assignList.indexOf(item));
            this.assignList.splice(this.assignList.indexOf(item), 1);

    },
        stepsCompleted: function(item) {
            var counter = 0;
            for(i in item.steps) {
                //console.log(item.steps[i][1]);
                if(item.steps[i][1]) {
                    counter++;
                }
            }
           // console.log(item + " " + counter);
            return counter;
        },
        getPriority: function(item) {
            switch (item.priority) {
                case "1":
                    return '!'
                break;
                case "2":
                    return '!!'
                break;
                case "3":
                    return '!!!'
                break;
                case "4":
                    return '!!!!'
                break;
                default:
                    console.log("ERROR: Unrecognized Priority " + item.priority);
            }
        },
       sortAssignments: function(option) {
           let newArr = [];
           switch(option) {

                case 'prio':
                    for(var i = 3; i > 0; i--)
               this.assignList.forEach(item => {
                   if(item.priority == i) {
                       newArr.push(item);
                   }
               })
                    console.log(newArr);
                    this.assignList = newArr;
                    break;
                case 'date':
                    array.sort(function(a, b) {
                        return new Date(b.dueDate) - new Date(a.dueDate);
                    })
                    break;
                case 'prog':
                    break;
            }
       },
        addStep: function(item) {
            item.steps.push(['',false]);
        },
        removeStep: function() {
            this.newAssign.steps.splice(this.newAssign.length-1, 1);
        },
        pushNew: function() {
            console.log(this.newAssign.dueDate);
            this.assignList.push(this.newAssign);
        }
    },

    computed: {

    },

    mounted: function() {

    }

}
)