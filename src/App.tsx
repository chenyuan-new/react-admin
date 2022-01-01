import React, { FC, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './App.css';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'mobx-react';

const antIcon = <LoadingOutlined style={{ fontSize: 24, }} spin />;

const App: FC = () => {
  return (<div>
    hello world
  </div>
  );
};

export default hot(App);