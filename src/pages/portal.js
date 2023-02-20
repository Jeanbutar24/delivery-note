import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicModal = dynamic(() => import('@/components/Modal/Modal2'), {
  ssr: false,
});

const Portal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mt-4 ml-3 '>
      <DynamicModal isOpen={open} isClose={setOpen}>
        <div className='ml-3 text-[30px]'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut ducimus porro minima modi ratione beatae aperiam cum, temporibus
            cupiditate, numquam, id totam ab ad aliquid? Nihil est velit voluptate perferendis quo, qui minima, esse quas corporis enim eaque. Magnam
            architecto accusamus tempore aliquid sunt, explicabo itaque sequi porro amet quasi fuga vel officiis nulla repudiandae doloribus odit
            commodi! Itaque aut reiciendis amet vitae a voluptatibus, cum debitis delectus ipsa eligendi rem, atque, sapiente non soluta veritatis
            ullam. Cum aut temporibus animi minima quaerat veniam. Veritatis voluptates ullam, voluptate magnam, iusto labore id culpa aliquid
            consectetur aut delectus quia. Tenetur culpa, minima architecto veniam aliquam sapiente reiciendis consectetur consequatur dolorum
            voluptatibus porro natus sequi quisquam necessitatibus provident hic, molestiae, in tempora recusandae? Corporis quaerat velit,
            exercitationem nobis numquam odio deleniti rerum dolorum nisi perspiciatis. Obcaecati, architecto ea provident animi atque ipsum possimus
            velit id odio odit aliquid iste consectetur sunt sint temporibus esse optio rerum, earum pariatur. Deleniti quos cumque officia at eius
            error laborum eaque provident similique accusamus illo temporibus repellat debitis, iste nulla, porro inventore iusto nam voluptatum
            explicabo impedit ullam corporis. Nesciunt, nemo corporis veritatis sed esse ad? Rem dicta cupiditate esse consequatur magni accusamus
            aliquid laudantium doloremque labore soluta consectetur provident impedit dignissimos nesciunt perferendis eaque expedita unde neque vero
            fugit accusantium rerum, corporis quo! Eveniet id tempore iusto sapiente nihil nam autem! Ducimus natus unde et tempore aut non recusandae
            sapiente necessitatibus molestiae, magni officia repellat iure quibusdam eveniet doloremque maiores sint facere omnis minus optio quidem
            ipsam! Ex quidem nisi, dolore itaque expedita totam explicabo accusamus sequi at laudantium nesciunt dolor incidunt illo illum ut! Sunt
            distinctio ratione qui nulla minus, deleniti voluptate corporis dolor rem. Enim consequatur culpa dignissimos unde velit asperiores
            tempora veritatis, adipisci obcaecati nostrum, possimus at assumenda omnis laborum eligendi optio, id magni modi nemo cupiditate dolores!
            Atque odit, praesentium officiis quia, labore, perferendis consectetur hic facere esse quas dolorem libero temporibus! Alias officia
            molestias, eaque quidem necessitatibus aspernatur nisi recusandae unde id quis! Amet culpa tempora officiis optio veritatis, dolores
            exercitationem, consequatur neque molestias eum perferendis ratione non sit modi nesciunt dolor est doloremque. Labore, modi consectetur
            explicabo maiores sunt ut libero nam ea quibusdam sit aspernatur. Laborum sit harum totam, rerum eius magnam, natus distinctio quaerat
            veritatis nisi tenetur dolore consequuntur facilis at tempora voluptatibus sunt beatae quidem quasi nihil alias? Vero consequatur,
            suscipit incidunt dolores recusandae ratione asperiores quasi praesentium quis, nihil officiis! Tempora debitis officia voluptatibus quae
            magnam rem eaque eveniet nisi, vero voluptatum autem excepturi pariatur sit natus? Excepturi, omnis. Adipisci laudantium quas quae facilis
            suscipit a soluta quidem quibusdam molestiae, cumque, expedita eveniet illum dolore dolor accusantium fugiat aperiam? Optio omnis
            perferendis architecto laborum quisquam aliquam a, aperiam vitae eaque, velit commodi odit dolores corrupti, illo ullam accusantium
            numquam minima fuga maxime quam doloremque! Accusantium adipisci rem quis optio, possimus unde beatae doloribus nesciunt quas placeat
            ratione ipsam veritatis, cumque vero quibusdam. Iure vero minima ex neque optio dolorem provident non commodi, at officiis accusantium
            maiores nulla eum dicta? Cum, perferendis. Consequuntur optio possimus, ab sint rem, sequi velit error molestiae facilis officia dolor
            rerum fugiat repudiandae! Nemo eum quia pariatur nostrum facere fugit fugiat, qui labore adipisci. Odio adipisci in, quae voluptate totam
            excepturi laboriosam possimus voluptatibus ad veritatis molestiae deleniti. Neque suscipit maiores eum alias repellendus qui fuga
            blanditiis eveniet et? Nemo harum facilis in aspernatur reiciendis sint optio, illum fuga, laborum facere ipsa suscipit repellendus
            similique nisi vitae unde! Esse praesentium voluptates magnam officia, pariatur ex enim sapiente vero qui aperiam tenetur suscipit dolor
            odio maxime, odit laudantium et quia! A, tempore delectus nostrum iusto explicabo quo quae deserunt saepe aspernatur quas reprehenderit
            sunt tenetur illum quidem commodi velit. Cupiditate impedit voluptate molestiae sapiente nihil laboriosam facere dolor eaque eum debitis.
            Illum, dicta sit vel quam officia dolores cum asperiores vitae voluptatem, nihil dolorum ad est facere aspernatur! Aliquid architecto
            quaerat, quas labore ex vitae inventore quae impedit cumque itaque. Doloribus labore, nostrum accusantium totam hic cupiditate ea quas
            dignissimos dolorem qui itaque harum neque saepe obcaecati inventore praesentium. Aperiam fugit explicabo neque impedit! Odio similique
            itaque ut dolores veniam nemo officia maxime quaerat consequuntur molestiae deserunt voluptatem quod quae maiores non enim, numquam
            necessitatibus. Nihil fuga voluptatem laudantium neque itaque similique maxime tempora minus asperiores tempore officia corporis ab sit
            reprehenderit, omnis exercitationem ullam aperiam! Sunt pariatur ratione est? Ut, quibusdam harum id facere eum sed in doloremque suscipit
            aut delectus possimus incidunt nesciunt, quasi velit aliquid ipsum. Culpa omnis, nemo consequatur quod nam suscipit minus ab, esse, ex
            quaerat provident adipisci enim sit? Officia, veniam nemo perferendis mollitia, itaque tempora sint voluptatum assumenda quia minus
            recusandae molestiae maiores repellat. Accusantium nam aspernatur voluptatibus vero ipsam vitae delectus autem officia non placeat quam,
            inventore corporis, ducimus perspiciatis voluptas id tempora. Facere magni pariatur iusto exercitationem eveniet veritatis at, nobis
            quibusdam unde veniam ea perferendis saepe fugiat? Voluptatem nemo perspiciatis magni consectetur commodi, esse, exercitationem sequi
            ducimus adipisci optio enim. Quibusdam ipsum rem necessitatibus libero tenetur, esse numquam eos. Accusamus accusantium consequuntur
            libero? Recusandae totam aliquam praesentium quia possimus atque laboriosam debitis autem blanditiis, placeat ipsa obcaecati cum, deleniti
            ut nostrum corporis incidunt natus qui nobis expedita adipisci provident est officia distinctio. Explicabo id, velit accusantium debitis
            cupiditate necessitatibus excepturi temporibus natus aliquid repellendus dignissimos a nostrum, numquam nobis aspernatur nihil possimus
            inventore facilis fugiat adipisci mollitia sint libero repellat! Accusamus velit repudiandae soluta magni sequi natus facere illum at,
            obcaecati amet rem mollitia labore dolorum et inventore reiciendis culpa nobis? Nulla harum voluptatum quae esse modi quidem accusantium
            provident quisquam qui reiciendis aliquam deleniti eos, aut explicabo sunt blanditiis! Quos exercitationem consequuntur iusto facere
            laboriosam fuga? Animi, ipsum optio molestias qui fugiat quas. Quibusdam ipsa consectetur laborum eos facilis necessitatibus fugiat culpa
            numquam minus, aliquam amet odit. Exercitationem accusamus praesentium doloribus sed unde voluptates reiciendis velit ratione sit fuga,
            perspiciatis aliquam iste soluta veritatis molestiae quam aspernatur obcaecati nemo? Odit, voluptatum! Quae, consequatur! Perferendis
            voluptates placeat in rem, quaerat minima?
          </p>
        </div>
      </DynamicModal>
      <div className='flex gap-4 '>
        <p>Modal saya jean</p>
        <button className='bg-[purple] text-white px-3 rounded-[10px]' onClick={() => (!open ? setOpen(true) : setOpen(false))}>
          Open Modal
        </button>
      </div>
    </div>
  );
};

export default Portal;
