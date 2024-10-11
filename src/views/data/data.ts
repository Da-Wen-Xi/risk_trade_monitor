import dayjs from "dayjs";
import { clone } from "@pureadmin/utils";
import { version } from "os";
import { publicDecrypt } from "crypto";
import { number } from "echarts";

const update = dayjs(new Date()).format("YYYY-MM-DD");

const tableData = [
  {
    name: "个人活期结算数据集",
    version: "1.0",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算数据集",
    version: "2.0",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算数据集",
    version: "3.0",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  },
  {
    name: "单位活期结算数据集",
    version: "1.0",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  },
  {
    name: "单位活期结算数据集",
    version: "1.1",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  },
  {
    name: "单位活期结算数据集",
    version: "2.0",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  },
  {
    name: "单位活期结算数据集",
    version: "3.0",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  },
  {
    name: "单位活期结算数据集",
    version: "4.0",
    import: "导入成功",
    publish: "发布成功",
    purpose: "风险交易预测",
    format: "CSV",
    number: "1000097",
    update
  }
];
const tableDataVerify = [
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V1",
    model: "LightGBM模型",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V1",
    model: "LightGBM模型",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V2",
    model: "LightGBM模型",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V1",
    model: "LightGBM模型",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V1",
    model: "LightGBM模型",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V1",
    model: "LightGBM模型",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V1",
    model: "LightGBM模型",
    number: "1000097",
    update
  },
  {
    name: "个人活期结算验证数据集",
    state: "验证完成",
    import: "个人活期结算数据集V1",
    model: "LightGBM模型",
    number: "1000097",
    update
  }
];

const cloneData = clone(tableData, true);

const tableDataMore = cloneData.map(item =>
  Object.assign(item, {
    state: "California",
    city: "Los Angeles",
    "post-code": "CA 90036"
  })
);

const tableDataImage = cloneData.map((item, index) =>
  Object.assign(item, {
    image: `https://pure-admin.github.io/pure-admin-table/imgs/${index + 1}.jpg`
  })
);

const tableDataSortable = cloneData.map((item, index) =>
  Object.assign(item, {
    date: `${dayjs(new Date()).format("YYYY-MM")}-${index + 1}`
  })
);

const tableDataExpand = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-06",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-07",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  }
];

export {
  tableData,
  tableDataMore,
  tableDataImage,
  tableDataExpand,
  tableDataSortable,
  tableDataVerify
};
