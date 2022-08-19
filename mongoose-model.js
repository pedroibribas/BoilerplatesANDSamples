const mongoose = require('mongoose');

const caseSchema = mongoose.Schema(
  {
    lawyer: {
      type: String
    },
    bar: {
      type: String
    },
    matter: {
      type: String
    },
    nominationDate: {
      type: String
    },
    attendanceDate: {
      type: String
    },
    lawsuitNumber: {
      type: String
    },
    lawsuitPassword: {
      type: String
    },
    attendeds: [{
      name: {
        type: String
      },
      securityNumber: {
        type: String
      },
      rgNumber: {
        type: String
      },
      rgOrigin: {
        type: String
      },
      birth: {
        type: String
      },
      age: {
        type: String
      },
      address: {
        type: String
      },
      addressComplement: {
        type: String
      },
      cityArea: {
        type: String
      },
      city: {
        type: String
      },
      postalCode: {
        type: String
      },
      phone: {
        type: String
      },
      email: {
        type: String
      },
      civilState: {
        type: String
      },
      job: {
        type: String
      },
      income: {
        type: String
      },
      jobPlace: {
        type: String
      },
      legalRep: {
        name: {
          type: String
        },
        securityNumber: {
          type: String
        },
        rgNumber: {
          type: String
        },
        rgOrigin: {
          type: String
        },
        birth: {
          type: String
        },
        age: {
          type: String
        },
        address: {
          type: String
        },
        addressComplement: {
          type: String
        },
        cityArea: {
          type: String
        },
        city: {
          type: String
        },
        postalCode: {
          type: String
        },
        phone: {
          type: String
        },
        email: {
          type: String
        },
        civilState: {
          type: String
        },
        job: {
          type: String
        },
        income: {
          type: String
        },
        jobPlace: {
          type: String
        },
      }
    }],
    opposites: [{
      name: {
        type: String
      },
      securityNumber: {
        type: String
      },
      rgNumber: {
        type: String
      },
      rgOrigin: {
        type: String
      },
      birth: {
        type: String
      },
      age: {
        type: String
      },
      address: {
        type: String
      },
      addressComplement: {
        type: String
      },
      cityArea: {
        type: String
      },
      city: {
        type: String
      },
      postalCode: {
        type: String
      },
      phone: {
        type: String
      },
      email: {
        type: String
      },
      civilState: {
        type: String
      },
      job: {
        type: String
      },
      income: {
        type: String
      },
      jobPlace: {
        type: String
      },
    }],
    witnesses: [{
      name: {
        type: String
      },
      data: {
        type: String
      },
    }],
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Suit', caseSchema);
