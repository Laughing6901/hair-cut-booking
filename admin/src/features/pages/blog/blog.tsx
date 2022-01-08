import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Header } from "../../pages/header/header";
import { listCateInfoResponse } from "../categories/cate-dto";
import { selectCateState } from '../categories/categoriesSlice';
import { blogInfoRequest, blogState } from '../blog/blog-dto';
import { createNewBlog, deleteBlog, selectBlogState } from './blogSlice';
import { blogValidate } from './blogValidate';


export const Blog: React.FC = () => {
    let initialValues: blogInfoRequest = useAppSelector(selectBlogState).blog;
    // let initialValues: any;
    const category: listCateInfoResponse = useAppSelector(selectCateState).categories;
    const baseUrl = "http://localhost:8000"
    const dispatch = useAppDispatch();
    const blogInfo: blogState = useAppSelector(selectBlogState);
    return (
        <>
        <Header tab = "blog" />
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Add Blog</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>Form options</h5>
                                                <hr/>
                                                
                                                <Formik
                                                    initialValues={initialValues}
                                                    validationSchema={blogValidate}
                                                    onSubmit={values => {
                                                        console.log(values);
                                                        // dispatch(createNewBlog(values));
                                                    }}
                                                    >
                                                    {({ errors, touched,values,setFieldValue }) => (
                                                        <Form encType="multipart/form-data" id='blogForm'>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label >Blog Id</label>
                                                                        <Field name="blog_id" className="form-control" placeholder="Enter blog id"/>
                                                                            
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.name && touched.name ? (
                                                                                <div>{errors.name}</div>
                                                                            ) : null}
                                                                        </div>
                                                                            
                                                                        <label >Blog Name</label>
                                                                        <Field name="name" className="form-control"   placeholder="Enter blog name"/>
                                                                            
                                                                    </div>
                                                                            
                                                                    <div className="form-group">
                                                                        <div className = "text-danger" >
                                                                            {errors.description && touched.description ? (
                                                                                <div>{errors.description}</div>
                                                                            ) : null}
                                                                        </div>
                                                                        <label>Description</label>
                                                                        <Field name="description" className="form-control"  placeholder = "description..."/>
                                                                    </div>

                                                                    <textarea className="form-control" form='blogForm' name='content' rows={10}></textarea>

                                                                    <div className="form-group">
                                                                        <label>Blog Image</label>
                                                                        <input id="file" name="image" type= "file" className="form-control pb-1 pt-1"onChange={(event:any) => {
                                                                            setFieldValue("image", event.currentTarget.files[0]);
                                                                        }}/>
                                                                    </div>
                                                                    <Field as="select" className="form-control mb-4"   name="cate_id">
                                                                        <option value="">choose categories...</option>
                                                                        {
                                                                            category.map(item => {
                                                                                return (
                                                                                    <option 
                                                                                    key={item.cate_id}
                                                                                    value={item.cate_id}>{item.name}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </Field>

                                                                </div>
                                                                <div className="col-md-2">
                                                                </div>
                                                                <div className="col-md-1">
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="font-weight-bold ">
                                                                            Id:
                                                                        </h6>
                                                                    </div>
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="font-weight-bold ">
                                                                            Name:
                                                                        </h6>
                                                                    </div>
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="font-weight-bold ">
                                                                            Price:
                                                                        </h6>
                                                                    </div>
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="font-weight-bold ">
                                                                            Description:
                                                                        </h6>
                                                                    </div>
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="font-weight-bold ">
                                                                            Categories:
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="">
                                                                            {values.blog_id}
                                                                        </h6>
                                                                    </div>
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="">
                                                                            {values.name}
                                                                        </h6>
                                                                    </div>
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="">
                                                                            {values.description}
                                                                        </h6>
                                                                    </div>
                                                                    <div className="form-group pb-3">
                                                                        <h6 className="">
                                                                            {values.cate_id}
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="text-center col-md-12">

                                                                    <button className="btn btn-primary" type="submit">
                                                                        <span>{blogInfo.state === 'pending' ? 
                                                                        <i className="fas fa-spinner fa-spin"></i> : <></>}</span>
                                                                    SUBMIT
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Form>
                                                    )}
                                                </Formik>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        blogInfo.listBlog.map(item => {
                                            return (
                                                <div key={item.blog_id} className="col-md-12 col-xl-4">
                                                    <div className="card">
                                                        <div className="card-block border-bottom">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-auto">
                                                                    <img src={`${baseUrl}${item.image}`} />
                                                                </div>
                                                                <div className="col-sm-5 text-left">
                                                                    <h3 className="text-c-green mb-0">{item.name}</h3>
                                                                    <h6>id: {item.blog_id} </h6>
                                                                    <h6>category: {item.cate_id}</h6>
                                                                    <h6 >{item.description} </h6>
                                                                </div>
                                                                <div className="col-1 text-right">
                                                                    <button className="btn theme-bg2 pr-0 text-white f-12" style={{fontSize: 12}}
                                                                    onClick={()=> {
                                                                        dispatch(deleteBlog(item.blog_id));
                                                                    }}>
                                                                        <i className="fas fa-trash-alt"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )        
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}