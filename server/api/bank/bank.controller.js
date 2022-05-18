const bankService = require('./bank.service')
const logger = require('../../logger');

// Handler to get Branch
const getBranch = (req, res) => {
try{
  // eslint-disable-next-line no-console
  bankService.getBranch(req.params.BranchId).then (response => {
  res.status(response.status).send(response)});
} catch (err) {
  logger.debug({message: 'Failed to complete the process', err: err});
  res.send({message: 'Failed to complete the process', err: err})
}
}

// Handler to get Branches
const getBranches = (req, res) => {
  try {
    bankService.getBranches().then (response => {
      res.status(response.status).send(response.data)});
    } catch (err) {
      logger.debug({message: 'Failed to complete the process', err: err})
      res.send({message: 'Failed to complete the process', err: err})
  }
}

module.exports = {
  getBranch,
  getBranches
}
