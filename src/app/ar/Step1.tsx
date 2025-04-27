const Step1 = () => {
  const onClickA = () => {
    // 处理选项A的逻辑
    console.log("选择了选项A");
  }

  const onClickB = () => {
    // 处理选项B的逻辑
    console.log("选择了选项B");
  }

  
  return (
    /*
    * 幽灵提出第一个问题：“你认为数据应该永远保留，还是在任务完成后删除？”
    * 玩家选择选项A/B。
    * */
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 px-4 py-2 rounded-xl z-[1010]">
      <h1 className="text-3xl font-bold">幽灵：</h1>
      <p className="text-xl">你认为数据应该永远保留，还是在任务完成后删除？</p>
      <div className="flex gap-4 mt-4">
        <button onClick={onClickA} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          A
        </button>
        <button onClick={onClickB} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          B
        </button>
      </div>
    </div>
  );
};

export default Step1;
