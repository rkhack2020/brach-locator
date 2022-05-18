const logger = require('../../logger');
const axios = require('axios');

const getBranches = async() => {
  try {
    const result = await axios.get(`${process.env.BANK_API}`);
    if(result) {
      return { status: 200, message: "Branch retrieved  Successfully", data: result.data.data};
    } else {
      return { status: 404, message: "Branch not available" };
    }
  } catch(err) {
    logger.debug('Error occured while getting the Branches at GYM DAO');
    return { status: 500, message: "Branches could not be found" }; 
  }
}

const getBranch = async (branch) => {
  try {
    if(typeof branch === 'string') {
      const result = await axios.get(`${process.env.BANK_API}`);
      const filterdRes = result.data.data[0].Brand[0].Branch.filter((bankBranch) => bankBranch.PostalAddress.TownName == branch)
      return { status: 200, message: "Branch retrieved  Successfully", data: filterdRes};
    } else {
      return { status: 404, message: "Invalid parameter" };
    }
  } catch(err) {
    logger.debug('Error occured while getting the Branch');
    return { status: 500, message: "Branch could not be found" }; 
  }
}

module.exports = {
  getBranch,
  getBranches
}
