import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

export default function Sidebar({setCam}) {
  return (
    <CDBSidebar style={{height: '100vh'}}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Deer AI</CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="sticky-note" onClick={() => setCam('one')}>Cam One</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" onClick={() => setCam('two')}>Cam Two</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" onClick={() => setCam('three')}>Cam Three</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" onClick={() => setCam('four')}>Cam Four</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Metrics
          </CDBSidebarMenuItem>
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