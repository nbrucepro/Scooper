// import {request,gql} from 'graphql-request';
// const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// export const getPosts=async()=>{
//     const query= gql`
//     query MyQuery {
//         postsConnection {
//           edges {
//             node {
//               author {
//                 bio
//                 name
//                 id
//                 photo {
//                   url
//                 }
//               }
//               createdAt
//               slug
//               title
//               excerpt
//               featuredImage {
//                 url
//               }
//               categories {
//                 name
//                 slug
//               }
//             }
//           }
//         }
//       }      
//     `
//     const resutl=await request(graphqlAPI,query);
//     return resutl.postsConnection.edges;
// }
// export const getPostsDetails=async(slug)=>{
//     const query= gql`
//     query GetPostDetails($slug:String!) {
//         post (where:{slug:$slug}){
//               author {
//                 bio
//                 name
//                 id
//                 photo {
//                   url
//                 }
//               }
//               createdAt
//               slug
//               title
//               excerpt
//               featuredImage {
//                 url
//               }
//               categories {
//                 name
//                 slug
//               }
//               content{
//                 raw
//               }
//             }
//           }     
//     `
//     const resutl=await request(graphqlAPI,query,{slug});
//     return resutl.postsConnection.edges;
// }
// export const getRecentPosts=async ()=>{
//     const query=gql`
//     query posts(
//         orderBy:createdAt_ASC
//         last:3
//     ){
//         title
//         featuredImage{
//             url
//         }
//         createdAt
//         slug
//     }
//     `
//     const resutl=await request(graphqlAPI,query);
//     return resutl.posts;
// }
// export const getSimilarPosts=async ()=>{
//     const query=gql`
//     query GetPostDetails($slug:string!,$categories:[string!]){        
//         posts(
//             where:{slug_not : $slug,AND:{categories_some:{slug_in:$categories}}
//             last:3
//         ){
//             title
//             featuredImage{
//                 url
//             }
//             createdAt
//             slug
//         }
//     }
//     `
//     const resutl=await request(graphqlAPI,query);
//     return resutl.posts;
// }
// export const getCategories=async ()=>{
//     const query=gql`
//     query GetCategories{        
//             categories{
//                 name
//                 slug
//             }
//     }
//     `
//     const resutl=await request(graphqlAPI,query);
//     return resutl.categories;
// }
// export const getComments = async (slug) =>{
//   const query = gql`
//   query GetComments($slug:String!){
//     comments(where :{post:{slug:$slug}}){
//       name
//       createdAt
//       comment
//     }
//   }
//   `
//   const resutl=await request(graphqlAPI,query,{slug});
//   return resutl.comments;
// }