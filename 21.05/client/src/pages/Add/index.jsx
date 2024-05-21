import React from "react";
import {
  useDeleteProductMutation,
  useGetPostMutation,
  useGetProductQuery,
} from "../../services/productApi";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import productSchema from "../../validations/productValidatio";
import { Popconfirm, Space, Table } from 'antd';
import { useState } from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2"

const Add = () => {
  const [postProduct] = useGetPostMutation();
  const { data, refetch } = useGetProductQuery();
  const[deleteProduct]=useDeleteProductMutation();

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render:(text,record)=>(
        <img src={record.img} alt={text} width={100} height={50}/>
      )
     
    },
    {
      title: 'Price',
      dataIndex: 'price',
    
    },
    {
      title: 'Title',
      dataIndex: 'title',
    
    },
    {
      title: 'Bio',
      dataIndex: 'bio',
      key: 'bio',
   
    },
    {
      title: 'Bio',
      dataIndex: 'bio',
      key: 'bio',
   
    },
    {
      title: "Action",
      render: (_, record) => {
      return  <Button
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
              if (result.isConfirmed) {
                await deleteProduct(record._id);
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }}
        >
          <DeleteIcon />
        </Button>;
      },
    }
    
  ];
  const formik = useFormik({
    initialValues: {
      img: "",
      price: "",
      title: "",
      bio: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await postProduct(values).then(() => {
        Swal.fire({
          title: "Added Succesfully",
          text: "You clicked the button!",
          icon: "success",
        });
        resetForm();
        refetch();
      });
    },
    validationSchema:productSchema
  });
  return (
    <div
      style={{
        maxWidth:"400px",
        width: "100%",
        margin: "30px auto",
        justifyContent: "center",
        alignItems: "center",
        padding:"100px 0"
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "500px",gap:"15px" }}
        onSubmit={formik.handleSubmit}
      >
        <h3>Add Product</h3>
        <TextField
         name="img"
          id="outlined-basic"
          label="Image"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.img}
        />
        {formik.touched.img && formik.errors.img && (
          <span style={{color:'red'}}>{formik.errors.img}</span>
        )}
        <TextField
         name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price && (
          <span style={{color:'red'}}>{formik.errors.price}</span>
        )}
        <TextField
         name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && (
          <span style={{color:'red'}}>{formik.errors.title}</span>
        )}
        <TextField
          name="bio"
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.bio}
        />
        {formik.touched.bio && formik.errors.bio && (
          <span style={{color:'red'}}>{formik.errors.bio}</span>
        )}
        <Button variant="contained" type="submit">Add</Button>
      </form>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        
      </Space>
      <Table style={{padding:'50px 0'}} columns={columns} dataSource={data?.data} onChange={handleChange} />
    </div>
  );
};

export default Add;
