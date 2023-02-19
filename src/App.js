import { Card } from "./Card";
import { Data } from "./CollegeData";
import "./App.css"
import { useState } from "react";



function App() {
  const [collegeDetails, setCollegeDetails] = useState(Data)
  const [isSearch, setIsSearch] = useState(false)
  const [isRatingFilter, setIsRatingFilter] = useState(false);
  const [isSortAsc, setIsSortAsc] = useState(false);
  const [isSortDesc, setIsSortDesc] = useState(false);
  const [isPriceFilter, setIsPriceFilter] = useState(false);
  const [isCdRating, setIsCdRating] = useState(false)


  //  Search by college name
  const searchCollege = (value) => {
    if (value?.length > 0) {
      setIsSearch(true)
      setIsSortAsc(false)
      setIsSortDesc(false)
      setIsRatingFilter(false)
      setIsPriceFilter(false)
      setIsCdRating(false)
      const filteredData = Data?.filter((item, i) => item.name.toLowerCase().includes(value))
      setCollegeDetails(filteredData);
    }
    else {
      setCollegeDetails(Data);
    }
  }

  //  Filter by college fee
  const priceFilter = () => {
    setIsSortAsc(false)
    setIsSortDesc(false)
    setIsRatingFilter(false)
    setIsPriceFilter(true)
    setIsCdRating(false)

    let sorted = Data.sort((a, b) => {
      return b.fees - a.fees;
    });

    setCollegeDetails(sorted)
  }

  // Filter by User Rating
  const userRatingFilter = () => {
    setIsRatingFilter(true)
    setIsSortAsc(false)
    setIsSortDesc(false)
    setIsPriceFilter(false)
    setIsCdRating(false)
    const ratingSort = Data.sort((a, b) => (b.userRating > a.userRating) ? 1 : -1);
    setCollegeDetails(ratingSort)

  }
  const collegeDuniyaRating = () => {
    setIsCdRating(true)
    setIsRatingFilter(false)
    setIsSortAsc(false)
    setIsSortDesc(false)
    setIsPriceFilter(false)
    const ratingSort = Data.sort((a, b) => (b.cdrating > a.cdrating) ? 1 : -1);
    setCollegeDetails(ratingSort)
  }



  // Sort by Ascending order (College Name)
  const sortByAscOrder = () => {
    setIsSortAsc(true)
    setIsSortDesc(false)
    setIsRatingFilter(false)
    setIsPriceFilter(false)
    setIsCdRating(false)

    const ascendingOrder = Data.sort((a, b) => {
      const A = a.name.toUpperCase();
      const B = b.name.toUpperCase();
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    })
    setCollegeDetails(ascendingOrder);
  }

  // Sort by descending order (College Name)
  const sortByDescOrder = () => {
    setIsSortDesc(true)
    setIsSortAsc(false)
    setIsRatingFilter(false)
    setIsPriceFilter(false)
    setIsCdRating(false)

    const descendingOrderData = Data.sort((a, b) => {
      const A = a.name.toUpperCase();
      const B = b.name.toUpperCase();
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    }).reverse()
    setCollegeDetails(descendingOrderData)
  }

  // Reset to default state
  const reset = () => {
    setIsRatingFilter(false);
    setIsSortAsc(false);
    setIsSortDesc(false);
    setIsPriceFilter(false)
    setIsCdRating(false)

    setCollegeDetails(Data)
  }




  return (
    <div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "7px" }}>
        <input type="text" className="input" placeholder="College Search" onChange={(e) => searchCollege(e.target.value)} />
        <button className="btn" onClick={() => priceFilter()}>Sort by Price</button>
        <button className="btn" onClick={() => userRatingFilter()}>Sort by User Rating</button>
        <button className="btn" onClick={() => collegeDuniyaRating()}>Sort by College Duniya Rating</button>
        <button className="btn" onClick={() => sortByAscOrder()}>Sort by Name Asc</button>
        <button className="btn" onClick={() => sortByDescOrder()}>Sort by Name Desc</button>

      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", padding: "10px" }} >

        {
          isSearch && collegeDetails?.map((item, i) => {
            return <Card key={i} cName={item?.name} location={item?.location} cdRating={item?.cdrating} userRating={item?.userRating} fees={item?.fees} />
          })
        }

        {
          !isSortDesc && !isSortAsc && !isRatingFilter && !isSearch && !isPriceFilter && collegeDetails?.map((item, i) => {
            return <Card key={i} cName={item?.name} location={item?.location} cdRating={item?.cdrating} userRating={item?.userRating} fees={item?.fees} />
          })
        }
        {
          isPriceFilter && collegeDetails?.map((item, i) => {
            return <Card key={i} cName={item?.name} location={item?.location} cdRating={item?.cdrating} userRating={item?.userRating} fees={item?.fees} />
          })
        }
        {
          isRatingFilter && collegeDetails?.map((item, i) => {
            return <Card key={i} cName={item?.name} location={item?.location} cdRating={item?.cdrating} userRating={item?.userRating} fees={item?.fees} />
          })
        }
        {
          isSortAsc && collegeDetails?.map((item, i) => {
            return <Card key={i} cName={item?.name} location={item?.location} cdRating={item?.cdrating} userRating={item?.userRating} fees={item?.fees} />
          })
        }

        {
          isSortDesc && collegeDetails?.map((item, i) => {
            return <Card key={i} cName={item?.name} location={item?.location} cdRating={item?.cdrating} userRating={item?.userRating} fees={item?.fees} />
          })
        }
        {
          isCdRating && collegeDetails?.map((item, i) => {
            return <Card key={i} cName={item?.name} location={item?.location} cdRating={item?.cdrating} userRating={item?.userRating} fees={item?.fees} />
          })
        }




      </div>
    </div>
  );
}

export default App;
