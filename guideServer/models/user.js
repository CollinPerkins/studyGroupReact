const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  name: String,
  password: String,
  guides: {
    ydkjs: {
      upAndGoing: {
        chp1: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp2: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp3: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        }
      },
      scopeAndClosures: {
        chp1: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp2: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp3: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp4: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp5: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        }
      },
      thisAndObjectPrototypes: {
        chp1: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp2: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp3: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp4: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp5: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp6: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        }
      },
      typesAndGrammar: {
        chp1: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp2: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp3: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp4: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp5: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        }
      },
      asnycAndProformance: {
        chp1: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp2: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp3: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp4: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp5: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp6: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        }
      },
      es6AndBeyond: {
        chp1: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp2: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp3: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp4: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp5: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp6: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp7: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        },
        chp8: {
          started: {type: Boolean, default: false},
          completed: {type: Boolean, default: false}
        }
      }
    },
    cs50: {
      week0: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week1: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week2: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week3: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week4: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week5: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week6: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week7: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week8: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week9: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week10: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week11: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      week12: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      }
    },
    javscriptAllonge: {
      started: {type: Boolean, default: false},
      completed: {type: Boolean, default: false}
    },
    introToMean: {
      part1: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      part2: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      part3: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      part4: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      part5: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      }
    },
    fccBackend: {
      votingApp: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      nightlifeCoordinationApp: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chartTheStockMarket: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      bookTradingClube: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      pinterestClone: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      }
    },
    domEnlightenment: {
      chp1: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp2: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp3: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp4: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp5: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp6: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp7: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp8: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp9: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp10: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp11: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp12: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      }
    },
    fccPortfolio: {
      started: {type: Boolean, default: false},
      completed: {type: Boolean, default: false}
    },
    javascriptDesignPatterns: {
      started: {type: Boolean, default: false},
      completed: {type: Boolean, default: false}
    },
    netflixClone: {
      started: {type: Boolean, default: false},
      completed: {type: Boolean, default: false}
    },
    openDataStructures: {
      chp1: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp2: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp3: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp4: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp5: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp6: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp7: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp8: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp9: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp10: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp11: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp12: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp13: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      },
      chp14: {
        started: {type: Boolean, default: false},
        completed: {type: Boolean, default: false}
      }
    },
    adminClone: {
      started: {type: Boolean, default: false},
      completed: {type: Boolean, default: false}
    }
  }
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
