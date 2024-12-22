import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

export default function CreateArticle() {
  const editorRef = useRef(null);
  const[post, setPost] = useState({
    title: '',
    subtitle: '',
    description: '', // Corrected field name from 'discription' to 'description'
    content: '',
    avatar: null,
  })

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    // Create FormData object
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('subtitle', post.subtitle);
    formData.append('description', post.description); // Corrected field name from 'discription' to 'description'
    formData.append('content', post.content);
    formData.append('avatar', post.avatar);

    console.log('formdata', formData)
    // Call API to create article
    try {
      const response = await axios.post('http://localhost:3000/api/articles/create-article', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });

      console.log(response.data);

    } catch (error) {
      if (error.response.status === 401) {
        console.log('Unauthorized');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" mx-auto p-4  ">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subheading" className="block text-gray-700 text-sm font-bold mb-2">
            Subheading
          </label>
          <input
            type="text"
            id="subheading"
            name="subheading"
            value={post.subtitle}
            onChange={(e) => setPost({...post, subtitle: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={post.description}
            onChange={(e) => setPost({...post, description: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Feature Image
          </label>

          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={(e) => setPost({...post, avatar: e.target.files[0]})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <Editor
            apiKey='jw9xy5hw163soiyws7eot8uuscatjk68g7ll58r58oxkngyl'
            onInit={(_evt, editor) => editorRef.current = editor}
            value={post.content}
            onEditorChange={(content) => setPost({...post, content: content})}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Article
        </button>
      </form>
    </>
  );
}
