import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateManyProfileInput } from './my-roots-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class MyRootsCreateManyProfileInputEnvelope {

    @Field(() => [MyRootsCreateManyProfileInput], {nullable:false})
    @Type(() => MyRootsCreateManyProfileInput)
    data!: Array<MyRootsCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
