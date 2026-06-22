import { Task, TaskList } from '../types';
export function listStats(tasks: Task[] = []) { const total = tasks.length; const completed = tasks.filter(t => t.is_completed).length; return { total, completed, pending: total - completed }; }
export function reportStats(lists: TaskList[]) { const tasks = lists.flatMap(l => l.tasks ?? []); const totalTasks = tasks.length; const completed = tasks.filter(t => t.is_completed).length; return { totalLists: lists.length, totalTasks, completed, pending: totalTasks - completed, percent: totalTasks ? Math.round((completed / totalTasks) * 100) : 0 }; }
