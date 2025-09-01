const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Compile weekly sales report from CRM data.",
        "taskDate": "2025-08-28",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Website Banner",
        "taskDescription": "Change promotional banner for upcoming festival sale.",
        "taskDate": "2025-08-27",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client Follow-up",
        "taskDescription": "Call client regarding pending payment.",
        "taskDate": "2025-08-29",
        "category": "Communication",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Bug Fix #234",
        "taskDescription": "Fix login page crash issue in production.",
        "taskDate": "2025-08-26",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review pull request for shopping cart feature.",
        "taskDate": "2025-08-28",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend sprint planning meeting.",
        "taskDate": "2025-08-27",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Update stock records in warehouse database.",
        "taskDate": "2025-08-29",
        "category": "Operations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Training Material",
        "taskDescription": "Create slides for onboarding new hires.",
        "taskDate": "2025-08-30",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Daily Report",
        "taskDescription": "Submit daily task completion report to manager.",
        "taskDate": "2025-08-26",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Database Backup",
        "taskDescription": "Run scheduled database backup.",
        "taskDate": "2025-08-27",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Perform internal system security audit.",
        "taskDate": "2025-08-30",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Software Update",
        "taskDescription": "Update project management tool to latest version.",
        "taskDate": "2025-08-28",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Customer Support",
        "taskDescription": "Resolve 5 open customer support tickets.",
        "taskDate": "2025-08-26",
        "category": "Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Product Demo",
        "taskDescription": "Give product demo to potential client.",
        "taskDate": "2025-08-28",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Documentation",
        "taskDescription": "Write API documentation for payment module.",
        "taskDate": "2025-08-29",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]

const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
} 

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));

  const admin =  JSON.parse(localStorage.getItem('admin'))

  return {employees,admin};
}  