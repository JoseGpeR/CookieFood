//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CookieFood.Models.Datos
{
    using System;
    using System.Collections.Generic;
    
    public partial class Order
    {
        public int Id { get; set; }
        public string DESCRIPCION { get; set; }
        public Nullable<decimal> PRICE { get; set; }
        public Nullable<decimal> CANTIDAD { get; set; }
        public string CLIENT_NAME { get; set; }
        public string NOMBRE_MESERO { get; set; }
        public Nullable<decimal> TOTAL { get; set; }
    }
}