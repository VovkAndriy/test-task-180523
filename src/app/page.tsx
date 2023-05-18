'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import { ProjectType, UserType } from './types';
import { User } from './components/User';
import { Project } from './components/Project';
import { Header } from './components/Header';

export default function Home() {
  const [user, setUser] = useState<UserType | null>(null);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const totalEarning = useMemo(() => {
    if (projects.length) {
      return projects.reduce((acc, project) => {
        if (typeof acc === 'number') {
          return +acc + +project.project_invoice?.amount;
        }
        return +acc.project_invoice?.amount + +project.project_invoice?.amount;
      });
    }
    return 0;
  }, [projects]);

  const completedProjectsCount = useMemo(() => {
    return projects.filter((item) => item.status === 'complete').length;
  }, [projects]);

  const disputedProjectsCount = useMemo(() => {
    return projects.filter((item) => item.status === 'dispute').length;
  }, [projects]);

  const getUser = useCallback(async () => {
    try {
      const res = await axios.get(
        'https://joba-network-staging.herokuapp.com/api/auth/user/0xb75A08E82A1Bf0FccEb89bbdAf9AAE00BE8CA29a',
      );
      if (res.data.user) {
        setUser(res.data.user);
      }
      if (res.data.projects) {
        setProjects(res.data.projects);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <Header />
      <main className="p-10">
        {!!user && (
          <User
            email={user.email}
            display_name={user.display_name}
            phone={user.phone}
            profile_photo={user.profile_photo}
            telegram_user_link={user.telegram_user_link}
          />
        )}
        <h3>
          Projects(total earnings:{' '}
          {typeof totalEarning === 'number'
            ? totalEarning.toFixed(0).toLocaleString()
            : null}
          {projects && projects.length
            ? projects[0].project_invoice.currency
            : null}
          )
        </h3>
        <h3>Completed Projects: {completedProjectsCount}</h3>
        <h3>Disputed Projects: {disputedProjectsCount}</h3>
        {projects.map((item) => (
          <Project
            status={item.status}
            key={item.id}
            name={item.name}
            description={item.description}
            total={`${+item.project_invoice.amount.toLocaleString()}${
              item.project_invoice.currency
            }`}
          />
        ))}
      </main>
    </>
  );
}
