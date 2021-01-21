import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom'
import {fade, makeStyles} from '@material-ui/core/styles';
import {
  Container,
  List, ListItem, ListItemIcon, ListItemText,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
import { bars, Drawer1 } from "../index";
import NavList from './Nav1'
import Layout1 from './Layout1'
import {isEmpty} from '../../helpers/utils'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: '#f5f5f5',
  }
}));

function getDefautlUrl(base, navs=[], menus=[]) {
  const url = base.startsWith('/') ? base : `/${base}`;
  const p1 = navs[0].path;
  const p2 = menus.find(item => item.nav === p1).main[0].path;
  return {
    from: url,
    to: `${url}/${p1}/${p2}`
  }
}

function FTemplate({ match: { path, url }, location: { pathname } }) {
  const breadcrumbs = path.substr(1).split('/').join(' 👉🏻 ');
  return <h6>[{`${breadcrumbs} : `}], [{url}], [{pathname}]</h6>
}

class CTemplate extends Component {
  render() {
    const { match: { path, url }, location: { pathname } } = this.props;
    const breadcrumbs = path.substr(1).split('/').join(' 👉🏻 ');
    return <h6>{`${breadcrumbs} : `}</h6>
  }
}

// title (optional), path, icon
function getMenu(parent_path, items) {
  return function () {
    const classes = useStyles();
    const list = items.map(({ path, title = '', icon: CompIcon }) => (
      <ListItem
        button
        component={NavLink}
        exact
        to={`${parent_path}/${path}`}
        activeClassName={classes.active}
        key={path}
        // selected={}
      >
        <ListItemIcon>
          <CompIcon />
        </ListItemIcon>
        <ListItemText primary={title || path} />
      </ListItem >
    ))
    return <List>{list}</List>
  }
}

// path, component/render
function getContent(parent_path, items) {
  return function () {
    return (
      <Switch>
        {items.map(({ path, component }) => {
          const url = `${parent_path}/${path}`;
          if (component) return <Route path={url} component={component} key={path} />
          return <Route path={url} render={FTemplate} key={path} />
        })}
      </Switch>
    )
  }
}

function getNavs(baseUrl, navList) {
  return navList.map(({path, icon, title=path}) => ({
    path: `/${baseUrl}/${path}`,
    title: title,
    icon: icon
  }))
}

function getAllRouters(navList, mainList, baseUrl) {
  return navList.map(({ path, icon }, idx) => {
    const subAry = mainList.find(item => item.nav === path).main
    const parent_url = `/${baseUrl}/${path}`
    const Menu = getMenu(parent_url, subAry)
    const Content = getContent(parent_url, subAry)
    return {
      title: path,
      icon: icon,
      path: parent_url,
      component: Layout1(Menu, Content)
    }
  })
}

const RouteList = ({routes, redirect = {}}) => {
  return (
    <Switch>
      {!isEmpty(redirect) ?
        <Redirect
          exact
          from={redirect.from}
          to={redirect.to}
        /> : null};
      {routes.map(({path, component}) => (
        <Route
          key={path}
          path={path}
          component={component}
      />))}
    </Switch>
  )
};

const getPageLayout = (navList, mainList, options) => {
  const { base, redirect } = options;
  const navs = getNavs(base, navList);
  const routers = getAllRouters(navList, mainList, base)

  return (
    <Container fixed>
      <bars.Bar2>
        <Drawer1 />
        <Typography>
          <MuiLink component={Link} to={`/${base}`} color="inherit" variant="h6">{base}</MuiLink>
        </Typography>
        <NavList navs={navs} />
      </bars.Bar2>
      <Fragment>
        <RouteList
          routes={routers}
          redirect={{ from: base, to: redirect }}
        />
      </Fragment>
    </Container>
  )
}

export {
  getDefautlUrl,
  getPageLayout
}
