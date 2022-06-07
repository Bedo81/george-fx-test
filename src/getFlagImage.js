export const getFlagImage = (item) => {
    if (item.flags && item.flags[0] === 'provided') {
      let imageLoaded = true;
      try {
        require('./flags/' + item.currency.substr(0, 2).toLowerCase() + '.png')
      } catch {
        imageLoaded = false;
      } finally {
        if (imageLoaded === true) {
          return (
            <img src={require('./flags/' + item.currency.substr(0, 2).toLowerCase() + '.png')} alt='' />
          )
        }
      }
    }
  }