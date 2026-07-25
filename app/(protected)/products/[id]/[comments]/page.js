
async function getReviewDetails(id,comments)
{
    const res =await fetch(`http://dummyjson.com/products/${id}`);
     if(!res.ok){
        throw new Error('Failed to Fetch the data.')
     }
     const data = await res.json();
  
     return data;
}

export default async function Comments({params}){
    const {id ,comments}= await params;
    
    const prductDetail=await getReviewDetails(id);
    const reviewer = prductDetail.reviews.find((review)=>review.reviewerName===decodeURIComponent(comments))
    if(!reviewer){
        throw Error('No Review found.')
    }
    console.log(reviewer)
  
    return(
        <div>
            <h1 className="text-2xl font-bold">Reviews by {reviewer.reviewerName}</h1>
            <p>Email: {reviewer.reviewerEmail}</p>
            <p>Date: {new Date(reviewer.date).toLocaleDateString("en-IN")}</p>
            <p>Comments: {reviewer.comment}</p>
        </div>
    )
}