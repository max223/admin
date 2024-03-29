// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const TreasureHunts = sequelize.define('treasure_hunts', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      defaultValue: Sequelize.literal('nextval(treasure_hunts_id_seq::regclass)'),
    },
    name: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'treasure_hunts',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  TreasureHunts.associate = (models) => {
    TreasureHunts.belongsTo(models.users, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
      as: 'user',
    });
    TreasureHunts.belongsTo(models.cities, {
      foreignKey: {
        name: 'cityId',
        field: 'city_id',
      },
      as: 'city',
    });
  };

  return TreasureHunts;
};
