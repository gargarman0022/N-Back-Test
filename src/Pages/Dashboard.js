import React, { Component } from 'react'
import logo_white from "../Assets/Images/brain_white.png"
import AllTests from './AllTests'
import DashboardRoutes from '../Routings/DashboardRoutes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const navigation = [
  { name: 'Tests',current: true,routes:"/dashboard/tests"},
  { name: 'Team',current: false,routes:"/dashboard/team" },
  { name: 'References',current:false,routes:"/dashboard/references"}
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

const Dashboard = (props) =>{
  return (
    <div className="h-screen">
            <div className="bg-yellow-500 max-w-100v mx-auto px-10 sm:px-10 lg:px-15">
              <div className="flex items-center justify-between h-12 md:h-20">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 md:h-12 md:w-12"
                      src={logo_white}
                      alt="Workflow"
                    />
                  </div>
                  <h5 className="text-3xl pl-5 font-bold text-white">N-Back Test</h5>
                  <div className="hidden md:block">
                    <div className="ml-16 flex items-baseline space-x-6">
                      {navigation.map((item) => (
                        <Link to={item.routes} key={item.routes}>
                        <button
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.routes===props.location.pathname
                              ? 'bg-purple-900 text-white'
                              : 'text-gray-100 hover:bg-yellow-700 hover:text-white',
                            'px-4 py-1 rounded-md text-lg font-bold'
                          )}>
                          {item.name}
                        </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container w-screen h-5/6">
              <DashboardRoutes/>
            </div>
          </div>
  )
}

export default Dashboard
