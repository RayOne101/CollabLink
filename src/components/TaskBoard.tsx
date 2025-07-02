import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import TaskColumn, { Column } from './TaskColumn';
import { Task } from './TaskCard';

// Initial data for the task board
const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: 'muted',
    tasks: [
      {
        id: 't1',
        title: 'Review creator applications',
        description: 'Check new creator profiles and select for campaign',
        tag: { color: 'accent', label: 'Collaboration' },
        dueDate: 'May 20',
        assignees: 2,
        progress: { completed: 1, total: 3 }
      },
      {
        id: 't2',
        title: 'Approve campaign brief',
        description: 'Finalize campaign goals and deliverables with agency',
        tag: { color: 'blue', label: 'Campaign' },
        dueDate: 'May 22',
        assignees: 1,
        progress: { completed: 0, total: 2 }
      },
      {
        id: 't3',
        title: 'Negotiate contract terms',
        description: 'Align on payment, timeline, and content rights',
        tag: { color: 'purple', label: 'Legal' },
        dueDate: 'May 24',
        assignees: 2,
        progress: { completed: 0, total: 2 }
      },
      {
        id: 't4',
        title: 'Draft content calendar',
        description: 'Plan posting schedule for campaign launch',
        tag: { color: 'accent', label: 'Content' },
        dueDate: 'May 25',
        assignees: 1,
        progress: { completed: 0, total: 3 }
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'blue',
    tasks: [
      {
        id: 't5',
        title: 'Create sponsored content',
        description: 'Creators are filming and editing campaign videos',
        tag: { color: 'accent', label: 'Content' },
        dueDate: 'May 18',
        assignees: 2,
        progress: { completed: 1, total: 4 }
      },
      {
        id: 't6',
        title: 'Review content drafts',
        description: 'Agency provides feedback on submitted posts',
        tag: { color: 'blue', label: 'Campaign' },
        dueDate: 'May 19',
        assignees: 1,
        progress: { completed: 2, total: 3 }
      },
      {
        id: 't7',
        title: 'Schedule payment to creators',
        description: 'Initiate payment for completed milestones',
        tag: { color: 'amber', label: 'Payments' },
        dueDate: 'May 17',
        assignees: 1,
        progress: { completed: 0, total: 2 }
      }
    ]
  },
  {
    id: 'in-review',
    title: 'In Review',
    color: 'amber',
    tasks: [
      {
        id: 't8',
        title: 'Approve final content',
        description: 'Agency reviews and approves all deliverables',
        tag: { color: 'blue', label: 'Campaign' },
        dueDate: 'May 15',
        assignees: 1,
        progress: { completed: 2, total: 2 }
      },
      {
        id: 't9',
        title: 'Analyze campaign results',
        description: 'Check engagement and reach metrics',
        tag: { color: 'accent', label: 'Analytics' },
        dueDate: 'May 16',
        assignees: 2,
        progress: { completed: 1, total: 2 }
      },
      {
        id: 't10',
        title: 'Send payment receipts',
        description: 'Share payment confirmations with creators',
        tag: { color: 'amber', label: 'Payments' },
        dueDate: 'May 14',
        assignees: 1,
        progress: { completed: 0, total: 1 }
      }
    ]
  },
  {
    id: 'completed',
    title: 'Completed',
    color: 'accent',
    tasks: [
      {
        id: 't11',
        title: 'Campaign launch announcement',
        description: 'Publish campaign launch on all channels',
        tag: { color: 'blue', label: 'Campaign' },
        dueDate: 'May 10',
        assignees: 1,
        progress: { completed: 1, total: 1 }
      },
      {
        id: 't12',
        title: 'All creators paid',
        description: 'Confirm all payments processed successfully',
        tag: { color: 'amber', label: 'Payments' },
        dueDate: 'May 9',
        assignees: 1,
        progress: { completed: 1, total: 1 }
      },
      {
        id: 't13',
        title: 'Campaign report shared',
        description: 'Send final analytics and feedback to agency and creators',
        tag: { color: 'accent', label: 'Analytics' },
        dueDate: 'May 8',
        assignees: 2,
        progress: { completed: 1, total: 1 }
      }
    ]
  }
];

interface TaskBoardProps {
  className?: string;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ className }) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTaskDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('taskId', task.id);
    setDraggedTask(task);
    
    // Find source column
    const sourceColumn = columns.find(col => 
      col.tasks.some(t => t.id === task.id)
    );
    
    if (sourceColumn) {
      setDragSourceColumn(sourceColumn.id);
      e.dataTransfer.setData('sourceColumnId', sourceColumn.id);
    }
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
    setDragSourceColumn(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Handle drag leave logic if needed
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) {
      return;
    }
    
    // Update columns state
    const newColumns = columns.map(column => {
      // Remove task from source column
      if (column.id === sourceColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== taskId)
        };
      }
      
      // Add task to target column
      if (column.id === targetColumnId) {
        const taskToMove = columns.find(col => col.id === sourceColumnId)?.tasks.find(task => task.id === taskId);
        if (taskToMove) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove]
          };
        }
      }
      
      return column;
    });
    
    setColumns(newColumns);
    
    // Show a toast notification
    const targetColumn = columns.find(col => col.id === targetColumnId);
    if (targetColumn && draggedTask) {
      toast({
        title: "Task moved",
        description: `${draggedTask.title} moved to ${targetColumn.title}`,
      });
    }
  };

  const handleStatusChange = (taskId: string, newStatus: string) => {
    // This function can be used for programmatic status changes (not used in this implementation)
  };

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
