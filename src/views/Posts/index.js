import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { CreateOutlined, MoreOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    jobTitle: "مهندس برمجيات",
    companyName: "شركة التقنية الحديثة",
    requiredDegree: "بكالوريوس في علوم الحاسب",
    yearsOfExperience: 3,
    date: "2024-07-06",
    jobType: "دوام كامل",
    jobDescription:
      "تطوير وصيانة تطبيقات الويب باستخدام تقنيات جافا سكريبت وReact.",
  },
  {
    id: 2,
    jobTitle: "محاسب",
    companyName: "شركة الاستثمار المالي",
    requiredDegree: "بكالوريوس في المحاسبة",
    yearsOfExperience: 5,
    date: "2024-06-15",
    jobType: "دوام كامل",
    jobDescription: "إعداد التقارير المالية وتحليل البيانات المالية للشركة.",
  },
  {
    id: 3,
    jobTitle: "مصمم جرافيك",
    companyName: "وكالة التصميم الإبداعي",
    requiredDegree: "بكالوريوس في الفنون الجميلة أو تصميم الجرافيك",
    yearsOfExperience: 2,
    date: "2024-07-01",
    jobType: "دوام جزئي",
    jobDescription: "تصميم الشعارات والمطبوعات والمواقع الإلكترونية.",
  },
  {
    id: 4,
    jobTitle: "مدير مشروع",
    companyName: "شركة البناء العملاقة",
    requiredDegree: "بكالوريوس في إدارة الأعمال أو الهندسة",
    yearsOfExperience: 7,
    date: "2024-05-20",
    jobType: "دوام كامل",
    jobDescription:
      "إدارة وتنظيم مشاريع البناء الكبيرة وضمان التزامها بالجداول الزمنية والميزانيات المحددة.",
  },
  {
    id: 5,
    jobTitle: "مسؤول تسويق رقمي",
    companyName: "شركة التجارة الإلكترونية",
    requiredDegree: "بكالوريوس في التسويق أو إدارة الأعمال",
    yearsOfExperience: 4,
    date: "2024-06-30",
    jobType: "دوام كامل",
    jobDescription:
      "تطوير وتنفيذ استراتيجيات التسويق الرقمي لزيادة الوعي بالعلامة التجارية والمبيعات.",
  },
  {
    id: 6,
    jobTitle: "مدير الموارد البشرية",
    companyName: "الشركة الوطنية للخدمات اللوجستية",
    requiredDegree: "بكالوريوس في إدارة الموارد البشرية أو إدارة الأعمال",
    yearsOfExperience: 6,
    date: "2024-07-10",
    jobType: "دوام كامل",
    jobDescription:
      "إدارة شؤون الموظفين وتطوير السياسات والإجراءات المتعلقة بالموارد البشرية.",
  },
  {
    id: 7,
    jobTitle: "مهندس شبكات",
    companyName: "شركة الاتصالات الدولية",
    requiredDegree: "بكالوريوس في هندسة الاتصالات أو تقنية المعلومات",
    yearsOfExperience: 3,
    date: "2024-06-05",
    jobType: "دوام كامل",
    jobDescription: "تصميم وتنفيذ وصيانة شبكات الاتصالات وضمان أدائها العالي.",
  },
  {
    id: 8,
    jobTitle: "معلم لغة إنجليزية",
    companyName: "مدرسة اللغة العالمية",
    requiredDegree: "بكالوريوس في اللغة الإنجليزية أو التعليم",
    yearsOfExperience: 4,
    date: "2024-07-15",
    jobType: "دوام كامل",
    jobDescription:
      "تدريس اللغة الإنجليزية للطلاب من مختلف المستويات وتحضير المواد التعليمية.",
  },
  {
    id: 9,
    jobTitle: "مطوّر تطبيقات موبايل",
    companyName: "شركة البرمجيات المبتكرة",
    requiredDegree: "بكالوريوس في علوم الحاسب أو هندسة البرمجيات",
    yearsOfExperience: 3,
    date: "2024-07-01",
    jobType: "دوام كامل",
    jobDescription:
      "تطوير تطبيقات الموبايل لنظامي التشغيل Android وiOS باستخدام أدوات البرمجة الحديثة.",
  },
  {
    id: 10,
    jobTitle: "محلل بيانات",
    companyName: "شركة التحليلات الذكية",
    requiredDegree: "بكالوريوس في الإحصاء أو علوم البيانات",
    yearsOfExperience: 5,
    date: "2024-06-20",
    jobType: "دوام كامل",
    jobDescription:
      "تحليل البيانات وتقديم تقارير مفصلة تساعد في اتخاذ القرارات الاستراتيجية.",
  },
];

// jobTitle: "مدير الموارد البشرية",
//     companyName: "الشركة الوطنية للخدمات اللوجستية",
//     requiredDegree: "بكالوريوس في إدارة الموارد البشرية أو إدارة الأعمال",
//     yearsOfExperience: 6,
//     date: "2024-07-10",
//     jobType: "دوام كامل",
//     jobDescription: "إدارة شؤون الموظفين وتطوير السياسات والإجراءات المتعلقة بالموارد البشرية.
const PostsPage = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "jobTitle", // should b ethe same key come from api
        header: "Job Title",
        size: 150,
      },
      {
        accessorKey: "companyName",
        header: "Company Name",
        size: 150,
      },
      {
        accessorKey: "requiredDegree",
        header: "Required Degree",
        size: 200,
      },
      {
        accessorKey: "yearsOfExperience",
        header: "Required Years",
        size: 150,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "jobType",
        header: "Jop Type",
        size: 150,
      },
      {
        accessorKey: "jobDescription",
        header: "Description",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableTopToolbar: false,
    enableColumnActions: false,
    enableSorting: false,
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <>
        <IconButton component={Link} to={`/posts/${row.original.id}`}>
          <MoreOutlined />
        </IconButton>
      </>
    ),
  });
  return (
    <Box>
      <Button
        startIcon={<CreateOutlined />}
        component={Link}
        to={"/posts/create"}
        variant="contained"
        color={'primary'}
        sx={{
            mb: 2
        }}
      >
        Create New Post
      </Button>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default PostsPage;
