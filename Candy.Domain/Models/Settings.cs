namespace Candy.Domain.Models
{
    public class Settings : Entity
    {
        public int Id { get; set; }
        /// <summary>
        /// 键
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 值
        /// </summary>
        public string Value { get; set; }
        /// <summary>
        /// 自动加载
        /// </summary>
        public bool Autoload { get; set; }
    }
}
