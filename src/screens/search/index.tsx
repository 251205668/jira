import { SearchList } from "./search-list";
import { SearchPanel } from "./search-panel";
import React, { useEffect, useState } from "react";
import * as qs from "qs";
import { cleanObject } from "utils/params";
import { useDebounceParam } from "Hooks";
import { param, project, User } from "constants/interface";
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const Search = () => {
  // 表格渲染数据
  const [list, setList] = useState<project[]>([]);
  // 参数: name,id
  const [param, setParam] = useState<param>({
    name: "",
    personId: "",
  });
  // 选项 users 列表
  const [users, setUsers] = useState<User[]>([]);

  const deBounceParam = useDebounceParam(param, 500);

  // useEffect 必选传入监听值，不需要监听时传入[],否则会一直调用
  // 请求查询 需要做防抖和拆解参数 并且需要delete value为空的情况
  useEffect(() => {
    fetch(
      `${BASE_URL}/projects?${qs.stringify(cleanObject(deBounceParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [deBounceParam]);

  useEffect(() => {
    fetch(`${BASE_URL}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <SearchList users={users} list={list}></SearchList>
    </div>
  );
};
