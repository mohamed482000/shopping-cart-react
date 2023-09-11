import React, { useState } from 'react'
import {authors} from '../../data/authors'
import './author.css'
function Authors() {
  const [name,setName] = useState('')
  const filteredAuthors = authors.filter((author) => author.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 )
  return (
    <section className="authors">
         <div className="authors-search-wrapper">
          <input type="search" placeholder='Search On Authors' value={name} onChange={(e) => setName(e.target.value)} />
         </div>
         <div className="authors-wrapper">
             {filteredAuthors.map(author =>
              <div key={author.id} className='author'>
                <img src={author.image} alt={author.name} className="author-img" />
                <h2 className="author-name">{author.name}</h2>
              </div>
              )}
         </div>
    </section>
  )
}

export default Authors