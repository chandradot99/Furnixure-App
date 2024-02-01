import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Search = () => {
  return (
    <div className='ml-auto'>
      <TextField
        variant="outlined"
        size="small"
        placeholder='Search'
        fullWidth
        className="w-[420px] h-[40px] border-2 bolder-solid border-[#E7E6EF]"
        InputProps={{
          classes: {
            root: "group pr-0 rounded-md outline-none focus-visible:outline-none",
            notchedOutline: "border-2 border-solid border-[#E7E6EF] group-hover:border-[#E7E6EF]"
          },
          endAdornment: (
            <InputAdornment position="end" className="cursor-pointer rounded-tr-md rounded-br-md flex items-center justify-center z-10 w-[51px] h-[40px] max-h-[40px] ml-0 bg-custom-pink">
              <SearchIcon htmlColor='white' />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
