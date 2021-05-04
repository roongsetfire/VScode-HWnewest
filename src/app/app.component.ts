import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currenttab: string = 'workspace';
  selectedtab(swaptab){
    this.currenttab=swaptab;
  }
  nodes1 = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        { id: 2, name: 'Cursor' },
        { id: 3, name: 'Find' },
        { id: 4, name: 'Font' },
        { id: 5, name: 'Formatting' },
        { id: 6, name: 'Diff Editor' },
        { id: 7, name: 'Minimap' },
        { id: 8, name: 'Suggestions' },
        { id: 9, name: 'Files' },
      ]
    },
    {
      id: 10,
      name: 'Workbench',
      children: [
        { id: 11, name: 'Apperance' },
        {id: 12,name: 'Breadcrumbs',},
        {id: 13,name: 'Editor Management',},
        {id: 14,name: 'Settings Editor',},
        {id: 15,name: 'Zen Mode',},
        {id: 16,name: 'Screencast Mode',}
      ]
    },
    {
      id: 17,
      name: 'Window',
      
    },
    {
      id: 18,
      name: 'Features',
      children: [
        {
          id:19,
          name: 'Explorer'
        },
        {
          id:20,
          name: 'Search'
        },
        {
          id:21,
          name: 'Debug'
        },
        {
          id:22,
          name: 'Testing'
        },
        {
          id:23,
          name: 'SCM'
        },
        {
          id:24,
          name: 'Extensions'
        },
        {
          id:25,
          name: 'Terminal'
        },
        {
          id:26,
          name: 'Task'
        },
        {
          id:27,
          name: 'Problems'
        },
        {
          id:28,
          name: 'Output'
        },
        {
          id:29,
          name: 'Comments'
        },
        {
          id:30,
          name: 'Remote'
        },
        {
          id:31,
          name: 'Timeline'
        },
        {
          id:32,
          name: 'Notebook'
        },
      ]
    },
    {
      id: 33,
      name: 'Application',
      children: [
        {
          id:34,
          name: 'Telemetry'
        }
      ]
    },
    {
      id: 35,
      name: 'Extensions',
      children:[{}]
    }


  ];
  
  nodes2 = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        { id: 2, name: 'Cursor' },
        { id: 3, name: 'Find' },
        { id: 4, name: 'Font' },
        { id: 5, name: 'Formatting' },
        { id: 6, name: 'Diff Editor' },
        { id: 7, name: 'Minimap' },
        { id: 8, name: 'Suggestions' },
        { id: 9, name: 'Files' },
      ]
    },
    {
      id: 10,
      name: 'Workbench',
      children: [
        { id: 11, name: 'Apperance' },
        {id: 12,name: 'Breadcrumbs',},
        {id: 13,name: 'Editor Management',},
        {id: 14,name: 'Settings Editor',},
        {id: 15,name: 'Zen Mode',},
        {id: 16,name: 'Screencast Mode',}
      ]
    },
    {
      id: 17,
      name: 'Window',
      children: [
        {}
      ]
    },
    {
      id: 18,
      name: 'Features',
      children: [
        {
          id:19,
          name: 'Explorer'
        },
        {
          id:20,
          name: 'Search'
        },
        {
          id:21,
          name: 'Debug'
        },
        {
          id:22,
          name: 'Testing'
        },
        {
          id:23,
          name: 'SCM'
        },
        {
          id:24,
          name: 'Extensions'
        },
        {
          id:25,
          name: 'Terminal'
        },
        {
          id:26,
          name: 'Task'
        },
        {
          id:27,
          name: 'Problems'
        },
        {
          id:28,
          name: 'Output'
        },
        {
          id:29,
          name: 'Comments'
        },
        {
          id:30,
          name: 'Remote'
        },
        {
          id:31,
          name: 'Timeline'
        },
        {
          id:32,
          name: 'Notebook'
        },
      ]
    },
    {
      id: 33,
      name: 'Application',
      children: [
        {
          id:34,
          name: 'Telemetry'
        }
      ]
    },
    {
      id: 35,
      name: 'Extensions',
      children:[{}]
    }


  ];
  options = {};
}
