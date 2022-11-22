import React, { useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

export default function Sidebar({setCam, lines}) {

  useEffect(() => {
    // listen for line changes
  }, [lines])

  return (
    <CDBSidebar style={{height: '100vh'}}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Deer AI</CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          { lines && lines.map((line, index) => (
            <CDBSidebarMenuItem icon="camera" key={index} onClick={() => setCam(line)}>{line}</CDBSidebarMenuItem>
          ))
          }
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{padding: '20px 5px'}}
        >
          {/* Sidebar Footer */}
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  )
}