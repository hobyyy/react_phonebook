import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList)
  const keyword = useSelector((state) => state.keyword)
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if(keyword !== undefined) { // keyword 검색할 때
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  },[keyword, contactList])
  return (
    <div>
      <SearchBox/>
      <div>
        num:{filteredList.length}
      </div>
      <div>
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ContactList