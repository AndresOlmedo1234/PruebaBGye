using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebApplication22.Models;

namespace WebApplication22
{
    public class TokenService

    {

        public TokenService()
        {

        }


        public string getToken(Usuario user)
        {
            var TokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Tokenslhfgjdahfgkjsdhfgkjshdfkjghsdkfjghlkgjhlfkhjlkfhj");
            var tokenDescriptor = new SecurityTokenDescriptor
            {

                Subject = new ClaimsIdentity(

                    new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, user.UsuarioId.ToString()),
                        new Claim(ClaimTypes.Name, user.UsuarioNombre)
                    }
                    ),

                Expires = DateTime.UtcNow.AddHours(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)

            };

            var token = TokenHandler.CreateToken(tokenDescriptor);

            return TokenHandler.WriteToken(token);

        }



    }
}
