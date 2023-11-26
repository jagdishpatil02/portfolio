import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Tabs } from 'flowbite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const tabsElement = document.getElementById('tabs-example');
    // create an array of objects with the id, trigger element (eg. button), and the content element
    const tabElements: any = [
      {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab'),
        targetEl: document.querySelector('#profile-example'),
      },
      {
        id: 'dashboard',
        triggerEl: document.querySelector('#projects-tab'),
        targetEl: document.querySelector('#project-example'),
      },
      {
        id: 'contacts',
        triggerEl: document.querySelector('#contact-tab'),
        targetEl: document.querySelector('#contact-example'),
      },
    ];

    // options with default values
    const options = {
      defaultTabId: 'profile',
      activeClasses: 'dark:text-white text-black border-primary border-b-4',
      inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-transparent dark:border-tranparent dark:hover:text-gray-300',
      onShow: () => {},
    };
    // instance options with default values
    const instanceOptions = {
      id: 'default-tab',
      override: true,
    };
    if (instanceOptions && tabElements && options && tabsElement) {
      const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
      tabs.show('profile');
    }
  }
}
